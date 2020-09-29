import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import mtd from '../../utilities/functions/miliToDate';
import dateToQuery from '../../utilities/functions/dateQueryString'

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

// import Title from './components/atoms/texts/Heading1';
// import QuickStat from './components/molecules/quickStat/QuickStat';
// import QuickStatPanel from './components/organisms/quickStatPanel/QuickStatPanel';
import QuickStatTemplate from '../templates/QuickStatTemplate';
import NavBarTemplate from '../templates/NavBarTemplate';
import DatePickerBar from '../templates/DatePickerBar';

const MainPage = (props) => {
    const [query, setQuery] = useState({});
    const [dates, setDates] = useState({ 
        range1s: '', 
        range1e: '', 
        range2s: '',
        range2e: ''
    });

    const handleDateSelection = dateArr => {
        setDates({
            range1s: mtd(dateArr[0]),
            range1e: mtd(dateArr[1]),
            range2s: mtd(dateArr[2]),
            range2e: mtd(dateArr[3])
        })
    }

    useEffect((dates) => {
        if (!dates) return 
        let querySet = dateToQuery(dates)
        setQuery({query: querySet})
    })

    return (
        <Container>
            <NavBarTemplate></NavBarTemplate>
            <DatePickerBar handler={ handleDateSelection } dates={ dates }></DatePickerBar>
            <QuickStatTemplate dates={ dates }></QuickStatTemplate>
        </Container>
    )
};

export default MainPage;