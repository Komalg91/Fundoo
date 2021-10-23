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
            <div class="main_right_content">
                <div class="top_container">
                    <Takenote />
                </div>
                <div class="lower_container">
                    <Displaynotes />
                </div>
            </div>
        </div>
    </div> 
     
</div>
</template>


<script type='module' src='./Dashboard.js'></script>


<style lang="scss" scoped>
@import './Dashboard.scss';
</style> 