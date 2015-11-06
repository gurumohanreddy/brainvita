  $(document).ready(function(){
    brainvita();
  });

  function brainvita(){
    var movable=0;
    var rows =null;
    var Column = null;
    var emptyMarble = null;
    var emptyRows = null;
    var emptyColumn = null;
    var passingEmpty =null;
    var gameRow = null;
    var gameColumn = null;
    refreshListeners();
    function refreshListeners(){
      $('.empty').off('click');
      $('.empty').on('click',handleEmptyClicks);
      $('.marble').off('click');
      $('.marble').on('click',handleMarbleClicks);
    }

    function handleMarbleClicks(){
        movable = $(this);
        var idValues=$(this).attr('id').split('.');
        rows = Number(idValues[0]);
        column = Number(idValues[1]);

        //refreshListeners();
    }
    function handleEmptyClicks(){

      if (movable === 0){
          return;
      }
      passingEmpty = $(this)
      var emptyMarble = $(passingEmpty).attr('id').split('.');
      emptyRows = Number(emptyMarble[0]);
      emptyColumn = Number(emptyMarble[1]);

      if (rows === emptyRows) {
          if (Math.abs(column-emptyColumn)===2) {
            gameColumn = Math.min(column,emptyColumn)+1;
            gameRow = rows;
            replacable();
          }
          else {
            return;
          }
      }
      else if (column = emptyColumn) {
        if (Math.abs(rows-emptyRows)===2) {
            gameRow = Math.min(rows,emptyRows)+1;
            gameColumn = column;
              replacable();
        }
        else {
          return;
        }
      }

      // $(this).addClass('marble').addClass('slot').removeClass('empty');
      // $(movable).removeClass('marble').removeClass('slot').addClass('empty');
      // refreshListeners();
      // movable=0;

    }

    var replacable = function(){
      $(passingEmpty).addClass('marble').addClass('slot').removeClass('empty');
      $(movable).removeClass('marble').removeClass('slot').addClass('empty');
      var tingu = gameRow.toString()+"\\."+gameColumn.toString();
      console.log(tingu);
      $('#'+tingu).removeClass('marble').removeClass('slot').addClass('empty');
      refreshListeners();
      movable=0;
    }

}
