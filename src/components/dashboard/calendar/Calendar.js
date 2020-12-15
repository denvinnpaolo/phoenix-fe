import React, { useEffect,useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../../UI/loading/Loading.js'
import { fetchPickupByTI } from'../../../store/actions/index.js';
import DataModal from '../modal/Modal.js'


const Calendar = () => {

    const dispatch = useDispatch();
    const {pickup, completed} = useSelector(state => state)
    const id = useSelector(state => state.users.userData.id);

    useEffect(() => {
        dispatch(fetchPickupByTI({transformer_id: id}))
    },[dispatch, completed.newCompleted])

    const [events, setEvents] = useState();

    useEffect(
        () => {
          if (!pickup.pickupData.data) {
             return null
            } else {

            let newEvents = [];
    
            newEvents = pickup.pickupData.data.map(event => {
              return {
                id: event.id,
                title: event.company_name,
                start: event.exp,
                end: event.exp,
                data: event
              };
            });
    
            setEvents(newEvents);
          }
        },
        [pickup.pickupData.data, pickup.isFetching, pickup.error]
      );

    if(!pickup.pickupData.data){
        return <Loading />
    } else {
        return (
            <div id="calendar-container">
                <div id="calendar-table" style={{ marginTop: 100, marginBottom: 50 }}>
                    <FullCalendar
                    defaultView="dayGridMonth"
                    editable={true}       
                    header={{
                        left: 'prev,next',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                      }}
                        events={events}
                        height="100%"
                        width="100%"
                        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
                        initialView="dayGridMonth"
                    />
                </div>
        </div>
        )
    }
};

export default Calendar