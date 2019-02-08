$.response.contentType = "text/json";
var output;
var conn = $.db.getConnection();
conn.prepareStatement("SET SCHEMA \"SYSTEM\"").execute();
var st = conn.prepareStatement("DELETE FROM \"CONTACTS\"").execute();
conn.commit();
var conn1 = $.db.getConnection();
var pstmt = conn1.prepareStatement( "select COUNT(ID) FROM TEST" );
var rs = pstmt.executeQuery();

while (rs.next()) {
    output = rs.getString(1);
    $.response.setBody(output);
}

conn.close();
conn1.close();
















