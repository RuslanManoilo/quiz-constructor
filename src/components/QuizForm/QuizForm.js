import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, FormBtn, FormInput, FormLabel, FormWrapper } from './QuizForm.styled';

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

const QuizForm = ({onAdd}) => {
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
                    Topic
                    <FormInput name="topic" />
                    <ErrMessage  name='topic' component="div" />
                </FormLabel>
                
                <FormLabel>
                    Time
                    <FormInput name="time" type="number" />
                    <ErrMessage name='time' component="div" />
                </FormLabel>
                
                <FormLabel>
                    Questions
                    <FormInput name="questions" type="number" />
                    <ErrMessage name='questions' component="div" />
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