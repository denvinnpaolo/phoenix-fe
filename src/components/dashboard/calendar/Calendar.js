import React, { useEffect,useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../../UI/loading/Loading.js'
import { fetchPickupByTI, fetchAvailById, fetchPickUpById } from'../../../store/actions/index.js';
import DataModal from '../modal/Modal.js'


const Calendar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {pickup, completed} = useSelector(state => state)
  const {id, type} = useSelector(state => state.users.userData);

  useEffect(() => {
    if(type ==='wt'){
      dispatch(fetchPickupByTI({transformer_id: id}))

    } else if (type==='wp'){
      dispatch(fetchPickupByTI({producer_id: id}))

    }
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

    const handleClick = e => {
      console.log(e)
      Swal.fire({
        title: e.event.title.toUpperCase(),
        text:`${Moment(e.event.extendedProps.data.exp).format('MMM. DD,YYYY')} : ${e.event.extendedProps.data.time_available.toUpperCase()}`,
        icon: 'info',
        showCancelButton: true,
        cancelButtonText: 'Close',
        confirmButtonText: 'View'
      }).then(result => {
        console.log(result)
        if (result.value) {
          if(type==='wt'){
            dispatch(fetchPickUpById({id: e.event.extendedProps.data.id}))
        } else if(type === 'wp'){
            dispatch(fetchPickUpById({id: e.event.extendedProps.data.id}))
        }
          history.push(`/pickup/view`);
        }
      });
    };

    const handleDateClick = arg => {
      const date = Moment(arg.dateStr).format('MM/DD/YYYY');
      Swal.fire({
        title: `Would you like to add an event to ${date}?`,
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Nope',
        confirmButtonText: 'Yeah'
      }).then(result => {
        if (result.value) {
          history.push(`/`, { date, visible: true });
        }
      });
    };
    
      
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
                      eventClick={handleClick}
                      dateClick={handleDateClick}
                    />
                </div>
        </div>
        )
    }
};

export default Calendar