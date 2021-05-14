import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: true,
    };
  }
  componentDidMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
      console.log(this.state);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
    } else if (nextProps && nextProps.task === null) {
      this.setState({
        id: "",
        name: "",
        status: true,
      });
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: true,
    });
  };
  render() {
    let { id } = this.state;

    return (
      <div className="panel panel-warning" style={{ marginTop: "20px" }}>
        <div className="panel-heading">
          <h3 className="panel-title">
            {id === "" ? "Thêm Sản phẩm" : "Sửa sản phẩm"}
            <span
              style={{
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "16px",
              }}
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            />
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="txt-16">Tên : </label>
              <input
                style={{
                  width: "80%",
                  border: `1px solid var(--primary-color)`,
                  height: "40px",
                  padding: "0 10px",
                }}
                type="text"
                className="form-control txt-16"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                required
              />
            </div>
            <label className="txt-16">Trạng Thái : </label>
            <select
              style={{
                height: "40px",
                border: `1px solid var(--primary-color)`,
              }}
              className="form-control txt-16"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Còn hàng</option>
              <option value={false}>Hết hàng</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5" />
                Lưu Lại
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                <span className="fa fa-close mr-5" />
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
