import logo from './asset/name_logo_hover.svg'

const Self = () => {
    const mytext = '많다.'
    return(
        <div className='Self'>
            외워야 할 게 {mytext}
        </div>
    )
}

const Self2 = () => {
    const today = '2023-06-27'
    return(
        <div className='Test'>
            <img src={logo} alt="" />
            <p>Today's 평가일은 {today} 입니다.</p>
        </div>
    )
}


const Sf = () => {
    const lunch = '수요일'
    return(
        <div className="lunch">
            {lunch}에는 뭘 먹을까
        </div>
    )
}

export {Self , Self2, Sf};