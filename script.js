async function start(){
    const a = await fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=110092&date=15-05-2021')
    const data = await a.json()
    console.log(data)

   

    for (j = 0; j < data.centers.length; j++) {
        

        var name = (data.centers[j].name)
        console.log(name)

        var address =(data.centers[j].address)
        console.log(address)

        var fees =(data.centers[j].fee_type)
        console.log(fees)

        var age_limit =(data.centers[j].sessions[0].min_age_limit)
        console.log(age_limit)


        var availability = (data.centers[j].sessions[0].available_capacity)
        console.log(availability)


        var vaccine_type =(data.centers[j].sessions[0].vaccine)
        console.log(vaccine_type)


        var slots_timing =(data.centers[j].sessions[0].slots)
        console.log(slots_timing)





    };
    
    


}

start() 