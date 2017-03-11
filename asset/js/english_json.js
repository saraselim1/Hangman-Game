var eng = '{ ' +
        ' "movies": [ {"name":"sully","hint":"tom hanks"},\n\
                         {"name":"sult","hint":"anglina jauli"} ,\n\
                         {"name":"titanic","hint":"leonardo dicaprio"},\n\
                         {"name":"ironman","hint":"robert downey"},\n\
                         {"name":"batman","hint":"Ben Affleck"},\n\
                         {"name":"spidrman","hint":"Tobey Maguire"},\n\
                         {"name":"theexpendable","hint":"silver stallone"},\n\
                         {"name":"missionimpossible","hint":"Tom Cruise"},\n\
                         {"name":"fastfurious","hint":"van deisel"},\n\
                         {"name":"next","hint":"nicolas kiadg"}],' +
        ' "sports":   [ {"name":"alahly","hint":"the best team in egypt"},\n\
                         {"name":"chelsea","hint":"the best team in england"},\n\
                         {"name":"barcelona","hint":"the best team in spain"},\n\
                         {"name":"bayernmunchen","hint":"the best team in germany"},\n\
                         {"name":"paris","hint":"the best team in france"},\n\
                         {"name":"benfica","hint":"the best team in protugal"},\n\
                         {"name":"elzamalek","hint":"the best team in africa"},\n\
                         {"name":"","hint":"the best team in southafrica"},\n\
                         {"name":"celtic","hint":"the best team in irlanda"},\n\
                         {"name":"roma","hint":"the best team in italy"}],' +
        ' "arts":   [ {"name":"momenadel","hint":"bta rbna in our track"},\n\
                         {"name":"ahmedali","hint":"the most fun person our track"},\n\
                         {"name":"adel","hint":"the worst person in out track"},\n\
                         {"name":"mohamedmostafa","hint":"the zakzok"},\n\
                         {"name":"abdelrahman","hint":"elsaidy"},\n\
                         {"name":"sherif","hint":"the angry man"},\n\
                         {"name":"masoud","hint":"EL ismalawy"},\n\
                         {"name":"youseef","hint":"genuis elshaka aw el track"},\n\
                         {"name":"morganfreeman","hint":"the best actor in hollywood"},\n\
                         {"name":"sharokhan","hint":"the best actor in bollywood"}]\n\
             }';


function readjsonenglish(category) 
{
    var obj = JSON.parse(eng);
    var s = Math.floor((Math.random() * 10));

    switch (category)
	{
        case '1':
            return obj.movies[s];
            break;
        case '2':
            return obj.sports[s];
            break;
        case '3':
            return obj.arts[s];
            break;
    }
}