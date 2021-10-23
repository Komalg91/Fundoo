<template>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<div class="notes_container">
    
    <Navheader />
    <div class="maincontainer">
        <div class="main_left">
            <div class="side_nav_header">
                <div class="sidebar">
                    <div class="sidebar_row">
                        <div class="sidebar_row_left">

                            <Sidebar />
                            
                        </div>
                        <div class="sidebar_row_right">
                            <span class="row_right_text"> Open-source licences</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main_right">
            <Takenote />
            <Displaynotes />
        </div>
    </div> 
</div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Takenote from './Takenote.vue'
import Navheader from './Navheader.vue'
import Displaynotes from './Displaynotes.vue'


export default {
    components: {
        Sidebar, Takenote, Navheader, Displaynotes
    }
}
</script>

<style lang="scss">
.maincontainer{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}
.main_left{
    width: 20%;
}
.main_right{
    width: 80%;
    padding: 5% 1%;

}
.dropmenu{
    display: none;
    flex-direction: column;
    box-shadow: 1px 2px 2px 0px rgb(65 69 73 / 10%), 1px 3px 3px 1px rgb(65 69 73 / 15%) ;
    padding: 12px;
    border-radius: 5px;
    margin-top: -100%;
    margin-left: -70px;
    width: 100px;
    background-color: #FFFFFF;
    z-index: 10;
}
.more_btn:hover{
    .dropmenu{
        display: flex;
    }
}
.color_btn:hover{
    .dropmenu{
        display: flex;
    }
}


@import './stylekeep.scss'
</style>