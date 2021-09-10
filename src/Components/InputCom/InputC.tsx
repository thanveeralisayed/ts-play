import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'


type inputCprops = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputC = (props: inputCprops) => {
    const handleChangeEvent = (event:React.ChangeEvent<HTMLInputElement>) =>
    {
        console.log(event);
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    id="basic-addon1">@</InputGroup.Text>
                <FormControl
                    onChange={handleChangeEvent}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    )
}

export default InputC
