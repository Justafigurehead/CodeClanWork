package example.codeclan.com.eightball; //package line - where this code lives.

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity; //app compatibility activity for backwards compat.
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.io.InputStream;


public class EightBallActivity extends AppCompatActivity { //extending AppCompatActivity - if you didn't want to extend to backwards devices then you would extend from just Activity.

    EditText questionEditText;
    Button shakeButton;
    TextFileAnswers textFileAnswer;

    // Each app has lifecycle events - things that happen when we setup an activity. As soon as our app is going it uses onCreate so we're overriding this event and passing this Bundle(the information that your app when you were previously using it) up to Android to use it.


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        InputStream input = getResources().openRawResource(R.raw.answers);
        this.textFileAnswer = new TextFileAnswers(input);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_eight_ball);

        questionEditText = (EditText) findViewById(R.id.question_editText);
        shakeButton = (Button) findViewById(R.id.shake_btn);
    }

    public void onShakeButtonClicked(View button){
        String answer = textFileAnswer.getAnswer();
        Intent intent = new Intent(EightBallActivity.this, AnswerActivity.class);

        intent.putExtra("answer", answer);
        startActivity(intent);

//        String question = questionEditText.getText().toString();
//        Log.d("ShakeButtonClick", question);
    }

    //last line - setContentView - we see what view we will be using when the user views it. It's the equivalent of saying this.setContentView (it's likely inherited from Activity super class). R.layout is a shorthand way of saying resource(folder).layout(folder) take activity_eight_ball(file).


    public void websitebBtnClicked(View Button){
        String url = "http://www.codeclan.com";
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(Uri.parse(url));
        startActivity(intent);

    }
}
