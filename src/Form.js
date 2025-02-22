import React from 'react';

function Form(props) {
    const {values, update, submit} = props;
    const change = event => {
        const name = event.target.name;
        const value = event.target.value;
        update(name,value);
    }
    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
            <label>Name
                <input 
                name="name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={change}
                />
            </label>
            <label>Email
                <input 
                name="email"
                type="email"
                placeholder="Email Address"
                value={values.email}
                onChange={change}                
                />
            </label>
            <label>Role
                <select value={values.role} name="role" onChange={change}>
                    <option value="">-- Select A Role --</option>
                    <option value="Dungeon Master">Dungeon Master</option>
                    <option value="Spelunker">Spelunker</option>
                    <option value="Herbalist">Herbalist</option>
                    <option value="Gamer Girl">Gamer Girl</option>
                    <option value="Himbo">Himbo</option>
                    <option value="Grover Cleveland">Grover Cleveland</option>
                </select>
            </label>
            <div>
                <button>Submit</button>
            </div>
            </div>
        </form>
    )
}
export default Form;