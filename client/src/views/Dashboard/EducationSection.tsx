import {
  DashboardSection,
  DashboardSectionContent as SectionContent,
  DashboardSectionTitle as SectionTitle,
  HeaderCellStyled
} from 'components/Shared/Styles'
import { ProfileContext } from 'context/profile/ProfileContext'
import { useProfileEducation } from 'hooks/useProfileEducation'
import moment from 'moment'
import React, { Fragment, useContext } from 'react'
import { Icon, IconButton, Table } from 'rsuite'

const { Column, Cell } = Table

const EducationSection: React.FC = () => {
  const profileContext = useContext(ProfileContext)
  const { profile } = profileContext.state

  const education = useProfileEducation()
  const { onDelete, navigateToEditEducation } = education

  return (
    <DashboardSection>
      <SectionTitle>Education Credentials</SectionTitle>

      {profile ? (
        <SectionContent>
          <Table
            data={profile.education}
            autoHeight={true}
            headerHeight={60}
            rowHeight={70}
          >
            {/* School */}
            <Column sortable flexGrow={1} verticalAlign="middle">
              <HeaderCellStyled>School</HeaderCellStyled>
              <Cell dataKey="school" />
            </Column>

            {/* Degree */}
            <Column sortable flexGrow={1} verticalAlign="middle">
              <HeaderCellStyled>Degree</HeaderCellStyled>
              <Cell dataKey="degree" />
            </Column>

            {/* Years */}
            <Column sortable flexGrow={1} verticalAlign="middle">
              <HeaderCellStyled>Years</HeaderCellStyled>
              <Cell>
                {(rowData: any) => {
                  const { from, to } = rowData

                  return (
                    <Fragment>
                      <span>{moment(from).format('YYYY.MM.DD')}</span>
                      <span className="mx-2">-</span>
                      <span>
                        {to === null ? 'Now' : moment(to).format('YYYY.MM.DD')}
                      </span>
                    </Fragment>
                  )
                }}
              </Cell>
            </Column>

            {/* Actions */}
            <Column flexGrow={1} align="center" verticalAlign="middle">
              <HeaderCellStyled>Actions</HeaderCellStyled>
              <Cell>
                {(rowData: any) => (
                  <Fragment>
                    <IconButton
                      className="mr-2"
                      icon={<Icon icon="pencil" />}
                      appearance="primary"
                      size="lg"
                      title="Edit"
                      onClick={() => navigateToEditEducation(rowData['_id'])}
                    />
                    <IconButton
                      icon={<Icon icon="trash" />}
                      color="red"
                      size="lg"
                      title="Delete"
                      onClick={() => onDelete(rowData['_id'])}
                    />
                  </Fragment>
                )}
              </Cell>
            </Column>
          </Table>
        </SectionContent>
      ) : null}
    </DashboardSection>
  )
}

export { EducationSection }
