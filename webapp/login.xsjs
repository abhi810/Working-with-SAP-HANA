var Name = $.request.parameters.get("NAME");
var Org = $.request.parameters.get("ORG");

var conn = $.db.getConnection();

/*conn.prepareStatement("SET SCHEMA \"SYSTEM\"").execute();
var results = conn.prepareStatement("INSERT INTO \"CONTACTS\" values (?,?,?,?,?)");
results.setString(1,Name);
results.setString(2,Org);
results.execute();
conn.commit();
$.response.setBody(JSON.stringify(results));*/
conn.close();
