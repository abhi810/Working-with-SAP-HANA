$.response.contentType = "text/plain";
var output = [];

var conn = $.db.getConnection();
var pstmt = conn.prepareStatement( "SELECT * FROM \"POPULATION\"" );
var rs = pstmt.executeQuery();

while (rs.next()) {
    output += rs.getString(2)+" \n ";
    $.response.setBody(output);
}

rs.close();
pstmt.close();
conn.close();






