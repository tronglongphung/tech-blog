
// $(document).ready(function(){				

//     $("#follow-button").click(function(){
//       if ($("#follow-button").text() == "+ Follow"){
//         // *** State Change: To Following ***      
//         // We want the button to squish (or shrink) by 10px as a reaction to the click and for it to last 100ms    
//         $("#follow-button").animate({ width: '-=10px' }, 100, 'easeInCubic', function () {});
        
//         // then now we want the button to expand out to it's full state
//         // The left translation is to keep the button centred with it's longer width
//         $("#follow-button").animate({ width: '+=45px', left: '-=15px' }, 600, 'easeInOutBack', function () { 
//           $("#follow-button").css("color", "#fff");
//           $("#follow-button").text("Following");
  
//           // Animate the background transition from white to green. Using JQuery Color
//           $("#follow-button").animate({
//             backgroundColor: "#2EB82E",
//             borderColor: "#2EB82E"
//           }, 1000 );
//         });
//       }else{
        
//         // *** State Change: Unfollow ***     
//         // Change the button back to it's original state
//         $("#follow-button").animate({ width: '-=25px', left: '+=15px' }, 600, 'easeInOutBack', function () { 
//           $("#follow-button").text("+ Follow");
//           $("#follow-button").css("color", "#3399FF");
//           $("#follow-button").css("background-color", "#ffffff");
//           $("#follow-button").css("border-color", "#3399FF");
//         });
//       }
//     }); 
//   });


  const followButton = async (e) => {
    e.preventDefault()
    const teamId = parseInt(e.target.dataset.team)
    const response = await fetch('/api/users/follow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({teamId})
    });
    const data = await response.json()
    if (response.ok) {
      console.log('OK', data);
    }
  }
  
  const following = document.querySelector('.follow-button');

  document.querySelector('.follow-button').addEventListener("click", followButton)

  document.querySelector('.follow-button').addEventListener("click", (e) => {
    document.querySelector('.follow-button').innerText = "Following";
    following.classList.toggle('following')
  })

  
  module.exports = following