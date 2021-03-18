import React, {Component, isValidElement} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import imagepath from '../constant/imagepath';
import {add ,Update} from '../redux/action';
import store from '../redux/store';
import List from './List';
import ModalComponent from './ModalVisible';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      name: '',
      description: '',
            updateIndex:0,
            TaskName : "",
            updateDescription:"",
            isUpdateModal:false

    };
  }

  _setName = value => {
    this.setState({
      name: value,
    });
  };

  _setDescription = value => {
    this.setState({
      description: value,
    });
  };

  _openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };





edit=()=>{
    this.setState({
        isUpdateModal:true
    })
    this._openModal()
}




  _closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  _add = () => {
    const {name, description} = this.state;
    let obj = {};
    let a = store.getState().todoList;
    obj.id = a.length + 1;
    obj.TaskName = name;
    obj.Description = description;
    store.dispatch(add(obj));
    console.log(store.getState().todoList);
    this._closeModal();
  };


  _ItemClick=(id)=>{
        const{todoList}=store.getState();
        let newObj = [...todoList];
        let index = newObj.findIndex(item => item.id ===id);
        this.setState({
            isUpdateModal:true,
            updateIndex:index,
            TaskName : newObj[index].TaskName,
            updateDescription:newObj[index].Description
        })
        this._openModal()
  };

  Update=()=>{
      const {updateIndex, TaskName , updateDescription} = this.state
      store.dispatch(Update(updateIndex , TaskName ,updateDescription ))
      this.setState({
          isUpdateModal:false,
          isEditModalVisible:false
      });
      this._closeModal();
  }
updateName= value=>{
  this.setState({TaskName: value});
}

_updateDescription= value =>{
  this.setState({updateDescription: value});
}

  componentDidMount(){
    store.subscribe(() => this.setState({  }))
  }
  render() {
    const _renderItem = ({item}) => {
      return <List item={item} id={item.id} Description={item.Description} TaskName={item.TaskName} edit={()=>this._ItemClick(item.id)}/>
    };
    const {isModalVisible ,isUpdateModal, TaskName, updateDescription} = this.state;
    const {todoList}=this.props;
    return (
      <View style={{backgroundColor: 'white', height: 990}} >
          <View style={{flexDirection:'row', backgroundColor: 'skyblue', height: 50
}}>
        <Text style={styles.todolist}> TODO LIST </Text>
        <TouchableWithoutFeedback onPress={() => this._openModal()}>
                <Image source={imagepath.plus} style={styles.plusIcon} />
              </TouchableWithoutFeedback>
              </View>
        <View >
          <View>
            <FlatList
              keyExtractor={item => item.id}
              data={store.getState().todoList}
              renderItem={_renderItem}
              ItemSeparatorComponent={() => <View style={{marginBottom: 1}} />}
            />

            {isModalVisible && <ModalComponent
              isModalVisible={isModalVisible}
              isUpdateModal={isUpdateModal}
              _closeModal={this._closeModal}
              _setName={this._setName}
              _setDescription={this._setDescription}
              _add={this._add}
            
            />}
            {isUpdateModal && <ModalComponent
              isModalVisible={isModalVisible}
              isUpdateModal={isUpdateModal}
              _closeModal={this._closeModal}
              _setName={this.updateName}
              _setDescription={this._updateDescription}
              _add={this.Update}
              TaskName={TaskName}
              updateDescription={updateDescription}
              
              
            />}

            <View style={{flex:1}}>
              
            </View>
          </View>
        </View>
      </View>
    );
  }
}





// const mapStateToProps=state=>{


//     return({
//         todoList:state.todoList
//     })
// }

// export default connect(mapStateToProp)(Todo)
const styles = StyleSheet.create({
  todolist: {
    fontSize: 25, 
    marginTop: 10,
    marginLeft:15,
    fontWeight: 'bold',
    color: 'white'
  },
  plusIcon: {
    marginTop: 0,
    width: 50,
    height: 50,
    marginLeft:"auto",
    marginRight:15
  }
   
});
