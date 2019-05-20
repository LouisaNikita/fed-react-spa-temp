import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: '1'
        },
        {
          id: 2,
          name: '2'
        }
      ]
    }
    console.log('1',this.state.list)
  }

  changeKey=()=>{
    // 同一层级 react认为key相同则组件相同
    // 这样交换key,react认为是组件移动  
    // 即 key2对应组件2，即使2现在是组件1的key;在 react看来，key2依然是组件2
    let {list} = this.state;
    
    list[0].id = list[0].id^list[1].id;
    list[1].id = list[0].id^list[1].id;
    list[0].id = list[0].id^list[1].id;
    // this.exchange(list[0].id, list[1].id)
    console.log('2',list)
    this.setState({
      list
    })
  };

  render(){
    const {list} = this.state;
    const a = http.get('a')
    return (
      <div>
        {
          list.map(item => {
            return <div key={item.id}>
            <span>{item.id}</span>
            {item.name}
            <input></input>
            </div>
          })
        }
        <button onClick={this.changeKey}>changeKey</button>
      </div>
    )
  }
}
export default App;
