import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import '@material-ui/core/styles';


class Home extends Component {  
    render (){
    return (
    <div>
        <form>
            <TextField
                variant='outlined' 
                size='small'
                color='secondary'
                placeholder='eg: Java AND React'
            />
            <Button 
                // href='#' 
                startIcon={<Search/>}
                // size='small'
                variant='contained' 
                color='primary'>
                Search
            </Button>
        </form>
        <h4>
            container
        </h4>
    </div>
    )
    }

}



export default Home;







