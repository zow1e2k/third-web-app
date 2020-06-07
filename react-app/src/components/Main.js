import React from "react";
import "./Main.css";
import moment from 'moment';
import Clock from 'react-live-clock';

const Business = {
    list: {},
    add: (id, name, description) => {
        Business.list[id] = {
            id: id,
            name: name,
            description: description,
            isComplete: false
        };
        Business.count++;
    },
    remove: (id) => {
        Business.list[id] = {};
    },
    check: (id) => {
        Business.list[id].isComplete = !Business.list[id].isComplete;
    },
    count: 0
};

let valid = {
    isNotEmpty:function (str) {
        let pattern =/\S+/;
        return pattern.test(str);
    }
};

let count = Business.count;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', description: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    add() {
        const {name, description} = this.state;
        if (!valid.isNotEmpty(name) || !valid.isNotEmpty(description)) {
            return;
        }

        Business.add(count++, name, description);
        this.forceUpdate();
    }

    remove(id) {
        Business.remove(id);
        this.forceUpdate();
    }

    check(id) {
        Business.check(id);
        this.forceUpdate();
    }

    handleChange(e, name) {
        this.setState({[name]: e.target.value});
    }

    render() {
        const hours = new Date().getHours();
        const mins = new Date().getMinutes();
        const secs = new Date().getSeconds();
        count = Business.count;
        let str = '';
        let arr = [];
        if (count !== 0) {
            for (let i = 0; i < count; i++) {
                if (Business.list[i].name === undefined) {
                    console.log("ID: " + i);
                    continue;
                }

                str = "Дело: " + Business.list[i].name + "\n"
                    + "Описание: " + Business.list[i].description + "\n"
                    + "Было создано/изменено в: "
                    + (hours < 10 ? '0' + hours : hours) + ":"
                    + (mins < 10 ? '0' + mins : mins) + ":"
                    + (secs < 10 ? '0' + secs : secs) + "\n"
                    + (Business.list[i].isComplete ? "Выполнено" : "Не выполнено");
                arr[i] = str;
            }
        }

        return (
            <div>
                Название дела
                <input type="text" value={this.state.name}
                       onChange={(e) => this.handleChange(e, 'name')}
                />
                Комментарий
                <input type="text" value={this.state.description}
                       onChange={(e) => this.handleChange(e, 'description')}
                />

                <button onClick={() => this.add()}>Добавить</button>

                {Object.keys(arr).map(arrID => (
                    <div key={arrID} className="arr">
                        {arr[arrID]}
                        <button onClick={() => this.check(arrID)}>Изменить состояние</button>
                        <button onClick={() => this.remove(arrID)}>Удалить</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Main
