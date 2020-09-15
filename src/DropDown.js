import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const DropDown = (props) => {
    const { degrees, courses, onDegreeSelectClick, onCourseSelectClick, selectedCourse, selectedDegree } = props;
    const variants = ['Primary', 'Success'];

    return (
        <div >
            <h3> Choose Degree & Course </h3>
            {degrees &&
                <DropdownButton
                    as={ButtonGroup}
                    key={variants[0]}
                    id={`dropdown-variants-${variants[0]}`}
                    variant={variants[0].toLowerCase()}
                    title={selectedDegree.name}
                    onClick={onDegreeSelectClick}
                >
                    {degrees.map((degree, i) => (
                        <Dropdown.Item
                            name={degrees && degrees.name}
                            reffer={degree}
                            key={i}>
                            {degree.name}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            }
            {courses &&
                <DropdownButton
                    as={ButtonGroup}
                    key={variants[1]}
                    
                    id={`dropdown-variants-${variants[1]}`}
                    variant={variants[1].toLowerCase()}
                    title={selectedCourse || (selectedDegree.courses && selectedDegree.courses[0])}
                    onClick={onCourseSelectClick}
                >
                    {courses.map((c, i) => (
                        <Dropdown.Item
                            name={degrees.name}
                            reffer={c}
                            key={i}>
                            {c}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            }
        </div>
    );
};

export default DropDown;


//===============================================================

/* import React from 'react';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
function DropDown(props) {
    return (
        <>
            {['Primary'].map(
                (variant) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    title={variant}
                    //onSelect={this.handleSelect}
                >
                    <Dropdown.Item eventKey="1">Industrial and mannagment Engeniring</Dropdown.Item>
                    <Dropdown.Item eventKey="1"> Computer Sience</Dropdown.Item>
                    <Dropdown.Item eventKey="1"> Biology</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                ),
            )}
            {['Secondary'].map(
                (variant) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    title={variant}
                >



                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                ),
            )}
            {['Success'].map(
                (variant) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    title={variant}
                >


                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                ),
            )}
        </>
    )
}

export default DropDown;
 */