import { DefaultNamingStrategy, NamingStrategyInterface, Table } from 'typeorm'
import { snakeCase, camelCase, upperFirst } from 'lodash'

const titleCase = (str: string) => upperFirst(camelCase(str))

export class NamingStrategy extends DefaultNamingStrategy
    implements NamingStrategyInterface {
    public columnName(
        propertyName: string,
        customName: string,
        embeddedPrefixes: string[],
    ): string {
        if (embeddedPrefixes.length) {
            return (
                snakeCase(embeddedPrefixes.join('_')) +
                (customName ? titleCase(customName) : titleCase(propertyName))
            )
        }
        return customName ? customName : snakeCase(propertyName)
    }

    public joinColumnName(
        relationName: string,
        referencedColumnName: string,
    ): string {
        return snakeCase(relationName + '_' + referencedColumnName)
    }

    public joinTableColumnName(
        tableName: string,
        propertyName: string,
        columnName?: string,
    ): string {
        return snakeCase(
            tableName + '_' + (columnName ? columnName : propertyName),
        )
    }

    public primaryKeyName(tableOrName: Table | string, _: string[]) {
        return snakeCase(
            `${
                tableOrName instanceof Table ? tableOrName.name : tableOrName
            }_pkey`,
        )
    }

    public indexName(tableOrName: Table | string, columnNames: string[]) {
        return snakeCase(
            `${
                tableOrName instanceof Table ? tableOrName.name : tableOrName
            }_${columnNames.join('_')}_index`,
        )
    }

    public uniqueConstraintName(
        tableOrName: Table | string,
        columnNames: string[],
    ) {
        return snakeCase(
            `${
                tableOrName instanceof Table ? tableOrName.name : tableOrName
            }_${columnNames.join('_')}_index`,
        )
    }
}
