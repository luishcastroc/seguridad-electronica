import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { GiCctvCamera } from 'react-icons/gi';

export default function Sidebar() {
  return S.list()
    .title(`Seguridad Electrónica Integral`)
    .items([
      S.listItem()
        .title('Inicio')
        .icon(() => <GiCctvCamera />)
        .child(S.editor().schemaType('siteSettings').documentId('central')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'siteSettings'
      ),
    ]);
}
