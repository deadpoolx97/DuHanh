import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };
  render() {
    let { tasks } = this.props;
    let { filterName, filterStatus } = this.state;
    let elmTasks = tasks.map((tasks, index) => {
      return (
        <TaskItem
          key={tasks.id}
          index={index}
          tasks={tasks}
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        />
      );
    });
    return (
      <div>
        <table style={{ width: "100%", fontSize: "16px" }}>
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ paddingBottom: "20px" }}>
              <td></td>
              <td>
                <input
                  style={{
                    width: "100%",
                    border: `1px solid var(--primary-color)`,

                    height: "40px",
                  }}
                  type="text"
                  className="form-control"
                  name="filterName"
                  value={filterName}
                  onChange={this.onChange}
                />
              </td>
              <td className="text-center">
                <select
                  style={{
                    width: "100%",
                    border: `1px solid var(--primary-color)`,

                    height: "40px",
                  }}
                  className="form-control"
                  name="filterStatus"
                  value={filterStatus}
                  onChange={this.onChange}
                >
                  <option value="-1">Tất Cả</option>
                  <option value="0">Hết hàng</option>
                  <option value="1">Còn hàng</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmTasks}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
