import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, FormBtn, FormInput, FormLabel, FormWrapper, TextContent } from './QuizForm.styled';

const quizSchema = Yup.object().shape({
    topic: Yup.string()
        .min(3, "Too short!")
        .required("This field is required!"),
    time: Yup.number()
        .min(10, "Min. 10 mins!")
        .max(45, "Max. 45 mins!")
        .required("This field is required!"),
    questions: Yup.number()
        .min(3, "Min. 3 questions!")
        .required("This field is required!"),
    level: Yup.string()
        .oneOf(['beginner', 'intermediate', 'advanced'])
        .required("This field is required!"),
});

const QuizForm = ({ onAdd }) => {
    return (
        <Formik
            initialValues={{
                topic: '',
                time: 0,
                questions: 0,
                level: "beginner",
            }}
            validationSchema={quizSchema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
        >
            <FormWrapper>
                <FormLabel>
                    <TextContent>
                        <p>Topic</p>
                        <ErrMessage name='topic' component="div" />
                    </TextContent>
                    <FormInput name="topic" />
                </FormLabel>
                
                <FormLabel>
                    <TextContent>
                        <p>Time</p>
                        <ErrMessage name='time' component="div" />
                    </TextContent>
                    <FormInput name="time" type="number" />
                </FormLabel>
                
                <FormLabel>
                    <TextContent>
                        <p>Questions</p>
                        <ErrMessage name='questions' component="div" />
                    </TextContent>
                    <FormInput name="questions" type="number" />
                </FormLabel>

                <FormLabel>
                    Level
                    <FormInput as="select" name="level">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </FormInput>
                    <ErrMessage name='level' component="div" />
                </FormLabel>

                <FormBtn type="submit">Add Quiz</FormBtn>
            </FormWrapper>
        </Formik>
    );
};


export default QuizForm;