var Name = $.request.parameters.get("NAME");
//var NameObj = JSON.stringify(Name);
var Org = $.request.parameters.get("ORG");
//var OrgObj = JSON.stringify(Org);
var Email = $.request.parameters.get("EMAIL");
//var EmailObj = JSON.stringify(Email);
var Phone = $.request.parameters.get("PHONE");
//var PhoneObj = JSON.stringify(Phone);
var Notes = $.request.parameters.get("NOTES");
//var NotesObj = JSON.stringify(Notes);
var conn = $.db.getConnection();
conn.prepareStatement("SET SCHEMA \"SYSTEM\"").execute();
//var sysuuid = conn.executeQuery( "SELECT SYSUUID FROM \"CONTACTS\"" );
//var guid  = JSON.stringify(sysuuid);
//var replace2 = "{\"0\":{\"SYSUUID\":[";  //JSON.parse to guidObj.0.SYSUUID or metadata.SYSUUID not working
//var replace3 = "]}}";
//var replace4 =  /,/gi;
//guid = guid.replace(replace2, '');
//guid = guid.replace(replace3, '');
//guid = guid.replace(replace4, '');
//var guid32 = 32;
//var guid32 = guid.substring(0,trun);
//conn.prepareStatement("SET SCHEMA \"SYSTEM\"").execute();
var results = conn.prepareStatement("INSERT INTO \"CONTACTS\" values (?,?,?,?,?)");
results.setString(1,Name);
results.setString(2,Org);
results.setString(3,Email);
results.setString(4,Phone);
results.setString(5,Notes);
results.execute();
conn.commit();
$.response.setBody(JSON.stringify(results));
conn.close();
