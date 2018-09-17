import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.state = {
            username: '',
            password: '',
            describe: '',
            sex: 0,
            language: 'vi',
            status: false
        };
    }

    onHandleChange(e){
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container mt-4 p-4 border">
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">

                        <label htmlFor="username">Tên đăng nhập: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="username"
                            value={this.state.name}
                            onChange={this.onHandleChange}
                        />

                        <label htmlFor="password">Mật khẩu: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="password"
                            value={this.state.password}
                            onChange={this.onHandleChange}
                        />

                        <label htmlFor="describe">Mô tả: </label>
                        <textarea 
                            className="form-control" 
                            name="describe" 
                            rows="5"
                            value={this.state.describe}
                            onChange={this.onHandleChange}
                        ></textarea>

                        <label htmlFor="sex">Giới tính: </label>
                        <select 
                            className="form-control" 
                            name="sex" 
                            value={this.state.sex} 
                            onChange={this.onHandleChange}
                        >
                            <option value={0}>Nam</option>
                            <option value={1}>Nữ</option>
                        </select>

                        <label htmlFor="language">Ngôn ngữ</label><br/>
                        <input type="radio" name="language" value="en" defaultChecked={this.state.language === 'en'}/>Tiếng Anh<br/>
                        <input type="radio" name="language" value="vi" defaultChecked={this.state.language === 'vi'}/>Tiếng Việt

                        <label htmlFor="status">Trạng thái</label><br/>
                        <input type="checkbox" name="status" value={true} defaultChecked={this.state.language === true}/>Tiếng Anh<br/>
                    </div>
                    <input type="submit" className="btn btn-primary mr-4"/>
                    <input type="reset" className="btn btn-secondary"/>
                </form>
            </div>
        );
    }
}

export default App;
