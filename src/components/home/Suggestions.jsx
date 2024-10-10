import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { BoxSeam, CalendarRange, Gift, Handbag, Truck } from 'react-bootstrap-icons'


const Suggestions = () => {
    
    const [oppCard, setOppCard] = useState([])
   
    return (
        <div className="opp-cards pt-2 pb-5">
            <Container className='d-flex justify-content-between align-items-center'>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Gift />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[0]}</h4>
                        <p className='mb-0'>{oppCard[1]}</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Truck />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[2]}</h4>
                        <p className='mb-0'>{oppCard[3]}</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <CalendarRange />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[4]}</h4>
                        <p className='mb-0'>{oppCard[5]}</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <Handbag />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[6]}</h4>
                        <p className='mb-0'>{oppCard[7]}</p>
                    </div>
                </div>
                <div className="opp-card-item d-flex justify-content-center align-items-center">
                    <div className="opp-img">
                        <BoxSeam />
                    </div>
                    <div className="opp-info ms-2">
                        <h4 className='mb-0'>{oppCard[8]}</h4>
                        <p className='mb-0'>{oppCard[9]}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Suggestions