import { Briefcase, Building, MapPin } from '@styled-icons/fa-solid'
import { CheckboxStyled, DatePickerStyled } from 'components/Shared/Styles'
import { useProfileExperience } from 'hooks/useProfileExperience'
import React from 'react'
import {
  Button,
  ButtonToolbar,
  CheckboxGroup,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Schema
} from 'rsuite'

interface ExperienceFormProps {
  edit: boolean
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ edit }) => {
  const experience = useProfileExperience()
  const {
    formEl,
    experienceForm,
    toDateDisabled,
    onSubmit,
    onKeyUp,
    onReset,
    navigateToDashboard
  } = experience

  const { StringType, DateType } = Schema.Types
  const model = Schema.Model({
    title: StringType().isRequired('This field is required'),
    company: StringType().isRequired('This field is required'),
    location: StringType().isRequired('This field is required'),
    from: DateType().isRequired('This field is required')
  })

  return (
    <Form
      fluid
      model={model}
      ref={formEl}
      formValue={experienceForm}
      autoComplete="off"
      checkTrigger="none"
      onChange={formValue => experience.onChange(formValue)}
    >
      <FormGroup>
        <ControlLabel>Job title</ControlLabel>
        <InputGroup inside style={{ width: '100%' }}>
          <FormControl
            name="title"
            placeholder="* Job title"
            onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
              onKeyUp(event, edit)
            }
          />
          <InputGroup.Addon>
            <Briefcase size="16" title="Job title" />
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <ControlLabel>Company</ControlLabel>
        <InputGroup inside style={{ width: '100%' }}>
          <FormControl
            name="company"
            placeholder="* Company"
            onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
              onKeyUp(event, edit)
            }
          />
          <InputGroup.Addon>
            <Building size="16" title="Company" />
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <ControlLabel>Location</ControlLabel>
        <InputGroup inside style={{ width: '100%' }}>
          <FormControl
            name="location"
            placeholder="* Location"
            onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
              onKeyUp(event, edit)
            }
          />
          <InputGroup.Addon>
            <MapPin size="16" title="Location" />
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <ControlLabel>From date</ControlLabel>
        <FormControl
          block
          size="lg"
          name="from"
          placeholder="YYYY / MM / DD"
          accepter={DatePickerStyled}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          name="current"
          accepter={CheckboxGroup}
          onChange={() => experience.toggleDisbaled(!toDateDisabled)}
        >
          <CheckboxStyled value="current">Current job</CheckboxStyled>
          <CheckboxStyled hidden={true} />
        </FormControl>
      </FormGroup>

      <FormGroup>
        <ControlLabel>To date</ControlLabel>
        <FormControl
          block
          disabled={toDateDisabled}
          size="lg"
          name="to"
          placeholder="YYYY / MM / DD"
          accepter={DatePickerStyled}
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Job description</ControlLabel>
        <FormControl
          componentClass="textarea"
          rows={5}
          name="description"
          placeholder="Job description"
          onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
            onKeyUp(event, edit)
          }
        />
      </FormGroup>

      <FormGroup>
        <ButtonToolbar className="my-4">
          <Button appearance="primary" onClick={() => onSubmit(edit)}>
            Submit
          </Button>
          <Button appearance="default" onClick={onReset}>
            Clear
          </Button>
          <Button appearance="subtle" onClick={navigateToDashboard}>
            Go Back
          </Button>
        </ButtonToolbar>
      </FormGroup>
    </Form>
  )
}

export { ExperienceForm }
