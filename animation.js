
var rating_board = $('.rating-board');

$("[class = 'bi bi-star']").hover((event_handler) => {
    
    var current_target = event_handler.target;
   
   var star_index = parseInt($(current_target).attr('id').slice(-1)) -1;
   
    for(let i = 0 ; i < rating_board[star_index].children.length ; i++){
       
        if( $(rating_board[star_index].children[i]).attr("rated")){
            continue;
        }
        $(rating_board[star_index].children[i]).attr('class', 'bi bi-star-fill');
        
        if(rating_board[star_index].children[i] == event_handler.target){
            break;
        }
    }
},(event_handler) => {
    var current_target = event_handler.target;
    var star_index = parseInt($(current_target).attr('id').slice(-1)) -1;
    for(let i = 0 ; i < rating_board[star_index].children.length ; i++){
        if( $(rating_board[star_index].children[i]).attr("rated")){
            continue;
        }
        $(rating_board[star_index].children[i]).attr('class', 'bi bi-star');
        if(rating_board[star_index].children[i] == event_handler.target){
            break;
        }
    }
});
$("[class = 'bi bi-star']").click((event_handler)=>{
   
    var current_target = event_handler.target;
    var star_index = parseInt($(current_target).attr('id').slice(-1)) -1;
    for(let i = 0 ; i < rating_board[star_index].children.length ; i++){
        
        $(rating_board[star_index].children[i]).attr("rated", "True")
        $(rating_board[star_index].children[i]).addClass('rated')
    }

    //send rating information and $(event_handler.target).attr("data-UUID") to the server
});


