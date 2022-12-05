import './style.scss'

// 'title'ga value yoziladi, |||| 'color'ga rangi yoziladi | black yoki white |||| 'size'ga figmadigi boshlang'ich font-size yoziladi faqat oq rang uchun ||| 30, 44, 48, 72     


function Title(props) {
    if(props.title && props.color === 'black'){
        return (
            <h1 className='title-unique-h1-black'>{props.title}</h1>
        )
    }
    else if (props.title && props.color === 'white' && props.size == 30){
        return (
            <h1 className='title-unique-h1-white-30'>{props.title}</h1>
        )
    }
    else if (props.title && props.color === 'white' && props.size == 44){
        return (
            <h1 className='title-unique-h1-white-44'>{props.title}</h1>
        )
    }
    else if (props.title && props.color === 'white' && props.size == 48){
        return (
            <h1 className='title-unique-h1-white-48'>{props.title}</h1>
        )
    }
    else if (props.title && props.color === 'white' && props.size == 72){
        return (
            <h1 className='title-unique-h1-white-72'>{props.title}</h1>
        )
    }
}

export default Title