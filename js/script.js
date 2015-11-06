  $(document).ready(function(){
    brainvita();
  });

  function brainvita(){
    var movable=0;
    var idValues=0;
    refreshListeners();
    function refreshListeners(){
      $('.empty').off('click');
      $('.empty').on('click',handleEmptyClicks);
      $('.marble').off('click');
      $('.marble').on('click',handleMarbleClicks);
    }

    function handleMarbleClicks(){
        movable = $(this);
        idValues=$(this).attr('id').split('.');
        console.log(Number(idValues[1])+2);
        //refreshListeners();
    }
    function handleEmptyClicks(){
      if (movable === 0){
          return;
      }
      // else if (Number(idValues[1])+2 >= 7 && Number(idValues[1])-2 >= 0) {

      $(this).addClass('marble').addClass('slot').removeClass('empty');
      $(movable).removeClass('marble').removeClass('slot').addClass('empty');
      console.log(movable);
      refreshListeners();
      movable=0;

      // }
      // else{
      //   return;
      // }
    }

}
