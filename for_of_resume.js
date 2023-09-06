const resume={
    Name:": S.R.Stalin Samuel Raja",
    Phone:": 7838596917" ,
    Mail:": srssr@gmail.com",
    Location:": Madurai,Tamil Nadu",    
    Profile:": A highly organized individual aimed to secure a responsible and challenging careeer opportunity to immensely utilize the skills while making a remarkable contribution to the success of the company and welfare of the humanity",
    
    UG:": Bachelor of Computer Application",
    Percent:": 80%",
    College:": The American College- Madurai",
    Year:": 2019 - 2022",
        
        
    HSC_Percent:": 78%",
    School:": NOBLE Matric Hr Sec School - Virudhunagar",
    Year:": 2018 - 2019",
        
        
    SSLC_Percent:": 86%",
    School:": NAZIA Matriculation School - Virudhunagar",
    Year:": 2016 - 2017",  
    Skills:[": Java"," Python for Web Development"," HTML Basics"],
    Project_Title:": Easy E - Ticketing",
    Description:":- The Project titled “Easy E – Ticketing” was developed for the people who uses the public transport The main objective of the e-ticket service is based on a daily based   activity. We have faced many problems while traveling on a town bus. Such as paying money to get tickets in rush hours and giving the change for the amount. Through using this easy E-ticket platform we can easily pay the amount online for our tickets by scanning a QR code",
    Lang:["- English"," Tamil"]
}

const objectkeys=Object.keys(resume);
const onjectvalues=Object.values(resume);

for (objVal of objectkeys){
    console.log(`
    ${objVal} ${resume[objVal]}
    `)
}