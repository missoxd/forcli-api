const data = [
    {
        id: 1,
        name: 'Arpina',
        medias: [
            {
                id: 1,
                title: 'teste1',
                description: 'teste2'
            }
        ]
    }
]

const agencies = {

    getAgency: function(args) { 
        var id = args.id;
        return data.filter(course => {
            return course.id == id;
        })[0];
    },
    
    getAgencies: function(args) {
        return data;
    }

}

module.exports = agencies