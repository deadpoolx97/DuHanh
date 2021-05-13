import React, { Component } from "react";
import TaskControl from "./TaskControl";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./manages.css";
class Manages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
      sortBy: "name",
      sortValue: 1,
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null,
      });
    }
  };
  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  onSubmit = (data) => {
    let { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      //edit
      let index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.onCloseForm();
    this.setState({
      tasks: tasks,
      taskEditing: null,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((tasks, index) => {
      if (tasks.id === id) {
        result = index;
      }
    });
    return result;
  };
  onDelete = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (id !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  onUpdate = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    // let index = _.findIndex(tasks, (task) => {
    //     return task.id === id;
    // })
    let taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName,
        status: filterStatus,
      },
    });
  };
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };
  render() {
    let {
      tasks,
      isDisplayForm,
      taskEditing,
      filter,
      keyword,
      sortBy,
      sortValue,
    } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return (
            task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
          );
        });
      }
      if (filter.status !== null) {
        tasks = tasks.filter((task) => {
          if (filter.status === -1) {
            return task;
          } else {
            return task.status === (filter.status === 1 ? true : false);
          }
        });
      }
    }
    if (keyword) {
      tasks = tasks.filter((tasks) => {
        return tasks.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }

    if (sortBy === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) {
          return sortValue;
        } else if (a.name < b.name) {
          return -sortValue;
        } else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) {
          return -sortValue;
        } else if (a.status < b.status) {
          return sortValue;
        } else return 0;
      });
    }

    let elmTaskForm =
      isDisplayForm === true ? (
        <TaskForm
          onCloseForm={this.onCloseForm}
          onSubmit={this.onSubmit}
          task={taskEditing}
        />
      ) : (
        ""
      );

    return (
      <div className="app__container ">
        <div className="grid wide mb-20 mt-15" style={{ marginTop: "20px" }}>
          <div className="text-center">
            <h1>Thêm Sản phẩm</h1>
          </div>
          <div className=" mt-15">
            <div className="mt-15">{elmTaskForm}</div>
            <div className={isDisplayForm === true ? "l-12" : "l-12"}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onToggleForm}
              >
                <span className="fa fa-plus mr-5"></span>Thêm Sản phẩm
              </button>

              <div className="row mt-15">
                <TaskControl
                  onSearch={this.onSearch}
                  onSort={this.onSort}
                  sortBy={sortBy}
                  sortValue={sortValue}
                />
              </div>
              <div className="row mt-15">
                <div className="l-12">
                  <TaskList
                    tasks={tasks}
                    onUpdateStatus={this.onUpdateStatus}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onFilter={this.onFilter}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Manages;
