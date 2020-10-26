import { Checkbox, DatePicker, Table } from 'rsuite'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const { HeaderCell } = Table

export const AppContent = styled.main.attrs({
  className: 'mt-24 mb-12'
})``

export const IconStyleWrapper = styled.span.attrs({
  className: 'inline-flex mr-1'
})``

export const PageStyled = styled.section.attrs({
  className: 'mx-auto px-8'
})`
  max-width: 1100px;
`

export const Title = styled.h1.attrs({
  className: 'mb-4 text-primary text-5xl leading-tight'
})``

export const Description = styled.p.attrs({
  className: 'flex items-center mb-4 text-2xl'
})`
  span {
    ${tw`ml-2`}
  }
`

export const Instruction = styled.small.attrs({
  className: 'block my-5'
})``

export const DatePickerStyled = styled(DatePicker)`
  .rs-picker-toggle-caret {
    right: 12px !important;
    color: #575757;
  }
`

export const CheckboxStyled = styled(Checkbox)`
  label {
    line-height: normal;
  }

  ${props =>
    props.hidden &&
    css`
      display: none;
    `}
`

export const SectionStyled = styled.section``

export const SectionTitle = styled.h2.attrs({
  className: 'flex items-center my-8 text-2xl font-bold'
})`
  span {
    ${tw`ml-2`}
  }
`

export const SectionContent = styled.div``

export const HeaderCellStyled = styled(HeaderCell)`
  .rs-table-cell {
    background-color: #f4f4f4 !important;
    color: #333;
    border-right: 2px solid white;
  }

  .rs-table-cell-content {
    line-height: 40px;
    ${tw`text-base`}
  }

  &:last-of-type {
    .rs-table-cell {
      border: none;
    }
  }
`
