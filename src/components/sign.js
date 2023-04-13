function Sign(props) {
    return (
        <div className={'sign_container' + ' ' + props.className} style={{gridArea: props.gridArea}}>
            <div className='sign_circle_color' style={{backgroundColor: props.backgroundColor, 
                                                        boxShadow: props.boxShadow}}>                          
                <div className='sign_circle_white'>
                    <img className='sign_img' src={props.img} />
                </div>
            </div>
        </div>
    )
}

export default Sign;