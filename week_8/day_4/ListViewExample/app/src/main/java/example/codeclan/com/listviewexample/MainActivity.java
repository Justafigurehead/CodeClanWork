package example.codeclan.com.listviewexample;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Adapter;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemClickListener {
    String[] names = {"John", "Jacob", "Jim", "Jerry", "Jam", "Jones", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam", "Jam"};
    ListView listViewNames;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listViewNames = (ListView) findViewById(R.id.ListViewEx);


        ArrayAdapter<String> namesAdapter = new ArrayAdapter<String>(MainActivity.this, android.R.layout.simple_list_item_1, names);

        listViewNames.setAdapter(namesAdapter);
        listViewNames.setOnItemClickListener(this);
    }


    @Override
    public void onItemClick(AdapterView<?> parent, View view, int i, long id) {
        String name = names[i];
        String toastText = "The Name " + name + " was clicked";

            Toast.makeText(this, toastText, Toast.LENGTH_SHORT).show();
        }
    }

