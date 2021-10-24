<template>
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
            <div class="display_container">
                <div class="display_notes_content">
                    <div class="display_notes" v-for="note in getdeleteNotes.slice().reverse()" :key="note._id" v-bind:style="{backgroundColor: note.bgcolor}">               
                        <div class="display_title">
                            <p> {{note.title}} </p>
                        </div>
                        <div class="display_description">
                            <p> {{note.description}} </p>
                            <!-- <p v-text="note.userid"></p>
                            <p>{{note.isdeleted}}</p> -->
                        </div>

                        <Notebuttons v-bind:note="note" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="module" src='./Displaydel.js'>

</script>


<style lang="scss">
@import '../Displayarchive/Displayarchive.scss';
@import '../Dashboard/Dashboard.scss';
@import '../../components/Displaynotes/Displaynotes.scss';

</style>