import React , { Component } from "react";

class TodoComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        }

        this.handleToUpdate =  this.handleToUpdate.bind();
    }

    handleToUpdate = () => {
        console.log('Handleupdate',this);
        this.applyStateChange(this.state);
        // this.setState(prevState=>{
        //     let listItems = {...this.state};
        //     return this.state;
        // })
    }

    applyStateChange(newState){
        this.setState(prevState=>{
            let listItems = {...this.state};
            listItems = newState
            return listItems;
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate',nextState);
        return true;
    }

    render(){
        console.log('render called',this);
        const items = this.state.items.map(item => (
            <li id={item.id}>
                {item.name}
            </li>
        ))

        console.log(items);
        return(
            <div>
                <h1>Todo Component</h1>
                <ul>{items}</ul>
                <AddItem data={this.state.items} handleToUpdate={this.handleToUpdate} />
            </div>
        )
    }
}

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : props.data,
            item:{
                id:0,
                name:''
            }
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        console.log('Component mounted')
    }



    onChange(e){
        let id = this.state.item.id+1;
        let name =  e.target.value;
        this.setState(prevState =>{
            let listItem = { ...prevState }
            listItem.item.id = id;
            listItem.item.name = name;
            return listItem;
        })
    }

    onSubmit(e){
        e.preventDefault();
        const newItem = {
            id:this.state.item.id,
            name:this.state.item.name
        }

        this.setState(prevState=>{
            let list = { ...prevState};
            list.items.unshift(newItem);
            return list;
        })

        this.props.handleToUpdate(this.state);
    }


    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" onChange={this.onChange} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default TodoComponent ;