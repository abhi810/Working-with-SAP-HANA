$.response.contentType = "text/json";
var output;
var conn = $.db.getConnection();
conn.prepareStatement("SET SCHEMA \"SYSTEM\"").execute();
var pstmt = conn.prepareStatement("DELETE FROM \"LEAVE1\"");
var rs = pstmt.execute();
conn.commit();

while (rs.next()) {
    output = rs.getString(1);
    $.response.setBody(output);
}

conn.close();
















