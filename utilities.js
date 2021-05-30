

function make_table_A(col_spec)
{
    let i , j , table , row , cell ;
    
    const nber_rows = col_spec[0].data.length ;
    const nber_cols = col_spec.length ;
    
    for ( j = 1 ; j < nber_cols ; j++ )
    {
        if ( col_spec[j].data.length != nber_rows )
        {
            err_msg = "make_table_A:\n" +
                      "Column [" + col_spec[0].header + "] has " + nber_rows + " entries.\n" +
                      "Column [" + col_spec[j].header + "] has " + col_spec[j].data.length + " entries." ;
            alert(err_msg) ;
            return ;
        }
    }
    
    table = document.createElement("table") ;
    
    row = document.createElement("tr") ;
    for ( j = 0 ; j < nber_cols ; j++ )
    {
        cell = document.createElement("th") ;
        cell.textContent = col_spec[j].header ;
        row.appendChild(cell) ;
    }
    table.appendChild(row) ;
    
    for ( i = 0 ; i < nber_rows ; i++ )
    {
        row = document.createElement("tr") ;
        for ( j = 0 ; j < nber_cols ; j++ )
        {
            cell = document.createElement("td") ;
            cell.textContent = col_spec[j].data[i] ;
            row.appendChild(cell) ;
        }
        table.appendChild(row) ;
    }
    
    return table ;
}


function test_make_table_A(id_display_area)
{
    let col1_spec    = {} ;
    col1_spec.header = "Column One" ;
    col1_spec.data   = [ 10 , 20 , 30 , 40 , 50 ] ;
    
    let col2_spec    = {} ;
    col2_spec.header = "Column Two" ;
    col2_spec.data   = [ "Dix" , "Vingt" , "Trente" , "Quarante" , "Cinquante" ] ;
    
    let col3_spec    = {} ;
    col3_spec.header = "Column Three" ;
    col3_spec.data   = [ 1.2 , 2.3 , 3.4 , 4.5 , 5.6 ] ;
    
    col_spec = [ col1_spec , col2_spec , col3_spec ] ;
    
    table = make_table_A(col_spec) ;
    
    document.getElementById(id_display_area).appendChild(table) ;
}
