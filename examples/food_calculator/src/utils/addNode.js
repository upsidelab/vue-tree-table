import { uuid } from 'vue-uuid'

const emptyNodeData = function(){
    return {
        day: '',
        day_name: '',
        meal: '',
        ingredient: '',
        carbs: 0,
        proteins: 0,
        fat: 0,
        kcal: 0,
        uuid: uuid.v4()
    }
}

const emptyNode = function(level){
    if (level === 1) return emptyNodeData()

    return {...emptyNodeData(), children: []}
}

export default function(level){
    return (array) => array.push(emptyNode(level))
}