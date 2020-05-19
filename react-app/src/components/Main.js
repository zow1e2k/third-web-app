import React from "react";
import "./Main.css";

const Business = {
    list: {},
    add: (id, name, hour, min, description) => {
        Business.list[id] = {
            id: id,
            name: name,
            hour: hour,
            min: min,
            description: description
        };
        Business.count++;
    },
    remove: (id) => {
        Business.list[id] = {};
    },
    count: 0
};

let valid = {
    isNotEmpty:function (str) {
        let pattern =/\S+/;
        return pattern.test(str);
    },
    isNumber:function(str) {
        let pattern = /^\d+$/;
        return pattern.test(str);
    }
};

let count = Business.count;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', hour: '', min: '', description: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    add() {
        const {name, hour, min, description} = this.state;
        if (!valid.isNotEmpty(name)
            || !valid.isNotEmpty(hour)
            || !valid.isNotEmpty(min)
            || !valid.isNotEmpty(description)) {
            return;
        }

        if (!valid.isNumber(hour) || !valid.isNumber(min)) {
            return;
        }

        Business.add(count++, name, hour, min, description);
        this.forceUpdate();
    }

    remove(id) {
        Business.remove(id);
        this.forceUpdate();
    }

    handleChange(e, name) {
        this.setState({[name]: e.target.value});
    }

    render() {
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
                    + "Час: " + Business.list[i].hour + "\n"
                    + "Минуты: " + Business.list[i].min + "\n"
                    + "Описание: " + Business.list[i].description;
                arr[i] = str;
            }
        }

        return (
            <div>
                Название дела
                <input type="text" value={this.state.name}
                       onChange={(e) => this.handleChange(e, 'name')}
                />
                Час
                <input type="text" value={this.state.hour}
                       onChange={(e) => this.handleChange(e, 'hour')}
                />
                Минуты
                <input type="text" value={this.state.min}
                       onChange={(e) => this.handleChange(e, 'min')}
                />
                Комментарий
                <input type="text" value={this.state.description}
                       onChange={(e) => this.handleChange(e, 'description')}
                />
                <button onClick={() => this.add()}>Добавить</button>

                {Object.keys(arr).map(arrID => (
                    <div key={arrID} className="arr">
                        {arr[arrID]}
                        <button onClick={() => this.remove(arrID)}>Удалить</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Main
