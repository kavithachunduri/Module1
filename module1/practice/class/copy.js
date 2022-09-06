 
      function change(){
        const colors = [ 'blue','red' ,'green'];
        let divBox= document.getElementById('mydiv');
        for(let index=0;index<colors.length;index++){
          
        if(index <= 2)
        {
          divBox.style.backgroundColor = colors[index];
        }
          else
          {
              index = 0;
          }
        
          
      }}