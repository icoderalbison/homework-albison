import './style.scss'

// 'description' ga value yoziladi, 'size' ga figmadigi boshlang'ich size yoziladi yoziladi || 18, 20
function Description(props) {
    if(props.description && props.size == 20){
        return (
            <p className="description-unique-p-black-20">{props.description}</p>
        )
    }
    else if(props.description && props.size == 18){
        return (
            <p className="description-unique-p-black-18">{props.description}</p>
        )
    }
  
}

export default Description