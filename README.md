# EDIT-THIS-README
#The Plan
import pokemon data object array
1) get three pokemon to show up on the page (use get item fucntion from old lab)
    j.s. create rando poke generator with math.random ()
    assign three pokemon onto the page. write fucntion so that it is 3 different pokemon. if they are not the same put to page.

after loading:
increment seen property:
    each pokemon, see if the user has seen them before. Make function for this that grabs from local storage and adds ++ to seen count, or creates new pokemon if they havent by adding to local storage.

    on click
    increment the caught property
    if this happens 10 times redriect to results page
    otherwise load 3 more!

