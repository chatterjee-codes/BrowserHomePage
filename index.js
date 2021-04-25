
            var slideIndex = 1;
            showImage(slideIndex);

            function count(n)
            {
               
                slideIndex = slideIndex + n;
                showImage(slideIndex);
            }

            function showImage(imageId)
            {
                var i;
                var x = document.getElementsByClassName("mySlides");
    
                if(imageId > x.length)
                {
                        slideIndex = 1;
                }
                if(imageId < 1)
                {
                        slideIndex = x.length;
                }
            
                for(i=0; i < x.length; i++)
                {
                        x[i].style.display = "none";
                }   
                
                x[slideIndex -1].style.display = "block"
            }
   