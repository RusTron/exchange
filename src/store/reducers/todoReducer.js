import { 
  ADDTODO,
} from '../../variables/varList';

export const actionCreators = {
  addTodo: (items) => ({
    type: ADDTODO,
    todosList: items,
  }),
}

export const filterTodoList = ({todosList}) => {

  const {} = todosList;

  // let persons = [];

  // if (searchValue) {
  //   persons = persons.filter(item=> 
  //     item.name.toLowerCase().includes(searchValue.toLowerCase()))
  // };

  // return persons;
}

const contactsInitialState = () => ({
  todosList: [],
  activeCount: 0,
  title: '',
  // isSelected: filters.all,
});

const todosReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todosList: state.todosList.length ? [...state.todosList, action.todo] : [action.todo],
        title: '',
        activeCount: state.activeCount + 1,
      };
    // case  CLEARFORM:
    //   return {
    //     ...state,
    //     searchValue: '',
    //     selectedNationality: '',
    //     selectedGender: '',
    //     clear: false,
    //   };

    default:
      return state;
  }
};

export default todosReducer;
