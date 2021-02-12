import { useState } from 'react'

const styles = {
    color: 'red',
    lineActiveTrue: "red",
    lineActiveFalse: "blue",
}

function Chart() {
    // declares and changes number of lines
    const [amount, setAmount] = useState(10);
    const [place, setPlace] = useState(0)
    return (
        <>Hello
            <div className="chart">
                <Line />
            </div>
        </>

    )
}

function Line(props) {
    return (
        <>
            <div className="line">

            </div>
            <div className="line">

            </div><div className="line">

            </div>
        </>
    )
}

// have a value for number of lines
// have a value that changes css color sorting method


export default Chart