const cds = require('@sap/cds');
const {
    readSFSF_User
} = require('./lib/handlers');

module.exports = cds.service.impl(async function () {
    /*** SERVICE ENTITIES ***/
    const {
        Project,
        Member,
        SFSF_User,
    } = this.entities;
  
   
    /*** HANDLERS REGISTRATION ***/
    // ON events
 //To concatenate staus with New  based on logic
   this.after('READ', Project, each => {
      if (each.status_ID = "1") each.name += ` new1 `
   if( (each.startDate = "2022-01-02") && (each.endDate = "2022-09-30") && (each.status_ID = "1"))
      
    return ;
       });

// update/create/del
// this.after('CREATE', Project, each => {
//         if (each.status_ID = "1") each.name += ` new1 `
//      if( (each.startDate = "2022-01-02") && (each.endDate = "2022-09-30") && (each.status_ID = "1"))
        
//       return ;
//          });



//      await srv.read(Project).where({status_ID:1});
     // await srv.read(Project,status_ID =1)
   
    //   this.after('READ', Project, async each => {
    //     if (each.status_ID = "1") each.name += ` new1 `
    //    if( (each.startDate = "2022-01-02") && (each.endDate = "2022-09-30") && (each.status_ID = "1"))
    //  //  if (status_ID = '1') return req.reject (400,`employee access denied`)

    //  await UPDATE (Project) .with ({ status_ID: status_ID += 1 })
    //  return ;
    //   });
    //   this.on(Employee, async req => {
    //   //   const {userId,username} = req.data
    //     if (req.userId = '100093') return req.reject (400,`Access denied for Employee`) ;
   

    // });
    // this.before ('Employee', async req => {
    //     const {userId,username} = req.data
    //     if (userId = '100093') return req.reject (400,`employee access denied`)
    //     return (req.username += 'employee access denied');
    // })

    // BEFORE events


    
// Before update: member
// async function updateProject(req) {
//     try {
//         // Need to check if team member was updated
     
//         await Project.tx(req).run(SELECT.one.from('Project').columns(['status_ID', 'startDate']));
        
//         return;
//     } catch (err) {
//         req.error(err.code, err.message);
//     }
// }
    // AFTER events
});
